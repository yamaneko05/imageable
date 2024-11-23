"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LucideEllipsis, LucideTrash2 } from "lucide-react";
import { deletePostAction } from "@/actions/post";
import { button } from "@/variants";

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
        <div className={button({ size: "sm", variant: "ghost" })}>
          <LucideEllipsis />
        </div>
      </MenuButton>
      <MenuItems anchor="bottom" className="w-64 rounded-lg shadow-lg">
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