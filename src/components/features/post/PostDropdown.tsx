"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LucideEllipsis, LucideTrash2 } from "lucide-react";
import { deletePostAction } from "@/actions/post";

export default function PostDropdown({
  postId,
  setIsDeleted,
  deleteable,
}: {
  postId: string;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
  deleteable: boolean;
}) {
  const handleDeleteClick = async () => {
    await deletePostAction(postId);
    setIsDeleted(true);
  };

  return (
    <Menu>
      <MenuButton>
        <div
          className={`rounded px-2 py-1 hover:bg-slate-50 ${deleteable ? "" : "opacity-0"}`}
        >
          <LucideEllipsis />
        </div>
      </MenuButton>
      <MenuItems anchor="bottom" className="w-64 rounded-lg border shadow-lg">
        {deleteable && (
          <MenuItem>
            <button
              onClick={handleDeleteClick}
              className="flex w-full items-center gap-2 bg-white px-4 py-2 text-start font-bold hover:bg-slate-50"
            >
              <LucideTrash2 size={18} />
              削除
            </button>
          </MenuItem>
        )}
      </MenuItems>
    </Menu>
  );
}
