import React from "react";

function useDateReturn({ createdAt, updatedAt }) {
    const nfd_createdAt = new Date(createdAt);
    const new_createdAt = nfd_createdAt.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const nfd_updatedAt = new Date(updatedAt);
    const new_updatedAt = nfd_updatedAt.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return { new_createdAt, new_updatedAt };
}

export default useDateReturn;
