import React from "react";

export const NewNoteCard: React.FC = () => {
  return (
    <div className="rounded-md p-5 space-y-3 bg-slate-700">
      <span className="text-sm font-medium text-slate-200">Adicionar nota</span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  );
};
