import os from "os";
import { execSync } from "child_process";
import React from "react";

type DiskInfo = {
    filesystem: string;
    size: number; // bytes
    used: number; // bytes
    avail: number; // bytes
    percent: number; // 0-100
    mount: string;
};

function formatBytes(bytes: number) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function getDiskUsage(): DiskInfo[] {
    try {
        if (process.platform === "win32") {
            // WMIC output (CSV) parsing
            const out = execSync("wmic logicaldisk get Caption,FreeSpace,Size /format:csv", { encoding: "utf8" });
            const lines = out.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
            const results: DiskInfo[] = [];
            // lines may include a header like Node,Caption,FreeSpace,Size
            for (const line of lines) {
                if (line.toLowerCase().startsWith("node")) continue;
                const parts = line.split(",");
                // Expect: Node,Caption,FreeSpace,Size
                if (parts.length < 4) continue;
                const caption = parts[1];
                const free = parseInt(parts[2] || "0", 10);
                const size = parseInt(parts[3] || "0", 10);
                if (!size) continue;
                const used = size - free;
                const percent = Math.round((used / size) * 100);
                results.push({ filesystem: caption, size, used, avail: free, percent, mount: caption });
            }
            return results;
        } else {
            // POSIX: use df -kP to get consistent columns
            const out = execSync("df -kP -x tmpfs -x devtmpfs", { encoding: "utf8" });
            const lines = out.split(/\n/).map((l) => l.trim()).filter(Boolean);
            const results: DiskInfo[] = [];
            // header: Filesystem 1024-blocks Used Available Capacity Mounted on
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                // split by whitespace but keep mountpoint which can contain spaces
                const parts = line.split(/\s+/);
                if (parts.length < 6) continue;
                const filesystem = parts[0];
                const sizeKb = parseInt(parts[1], 10);
                const usedKb = parseInt(parts[2], 10);
                const availKb = parseInt(parts[3], 10);
                const percentStr = parts[4];
                const mount = parts.slice(5).join(" ");
                const size = sizeKb * 1024;
                const used = usedKb * 1024;
                const avail = availKb * 1024;
                const percent = parseInt(percentStr.replace("%", ""), 10) || 0;
                results.push({ filesystem, size, used, avail, percent, mount });
            }
            return results;
        }
    } catch (err) {
        // If command fails (permissions, not available), return empty list
        return [];
    }
}

function getMemoryUsage() {
    const total = os.totalmem();
    const free = os.freemem();
    const used = total - free;
    const percent = Math.round((used / total) * 100);
    return { total, free, used, percent };
}

export default function Page() {
    const mem = getMemoryUsage();
    const disks = getDiskUsage();

    return (
        <div dir="rtl" className="p-6">
            <h1 className="text-2xl font-bold mb-4">لوحة التحكم الرئيسية</h1>

            <section className="mb-6 max-w-2xl bg-white shadow rounded p-4">
                <h2 className="text-lg font-semibold mb-2">استخدام الذاكرة</h2>
                <div className="text-sm text-gray-700 mb-2">إجمالي الذاكرة: {formatBytes(mem.total)}</div>
                <div className="text-sm text-gray-700 mb-2">الذاكرة المستخدمة: {formatBytes(mem.used)}</div>
                <div className="text-sm text-gray-700 mb-4">النسبة: {mem.percent}%</div>
                <div className="w-full bg-gray-200 h-3 rounded overflow-hidden">
                    <div className="bg-blue-600 h-3" style={{ width: `${mem.percent}%` }} />
                </div>
            </section>

            <section className="max-w-3xl bg-white shadow rounded p-4">
                <h2 className="text-lg font-semibold mb-3">استخدام التخزين</h2>
                {disks.length === 0 ? (
                    <div className="text-sm text-gray-600">غير متوفر — لا يمكن قراءة معلومات الأقراص على هذا النظام.</div>
                ) : (
                    <div className="space-y-3">
                        {disks.map((d) => (
                            <div key={d.mount} className="border rounded p-3">
                                <div className="flex justify-between mb-1">
                                    <div className="font-medium">{d.mount}</div>
                                    <div className="text-sm text-gray-600">{d.filesystem}</div>
                                </div>
                                <div className="text-sm text-gray-700">الحجم: {formatBytes(d.size)} — المتاح: {formatBytes(d.avail)}</div>
                                <div className="text-sm text-gray-700">المستخدم: {formatBytes(d.used)} — النسبة: {d.percent}%</div>
                                <div className="w-full bg-gray-200 h-2 rounded mt-2 overflow-hidden">
                                    <div className="bg-green-500 h-2" style={{ width: `${d.percent}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}