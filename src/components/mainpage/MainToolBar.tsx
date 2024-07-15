type MainToolBarProps = {
  folders: any[];
  selectedFolderId: string | null;
  onFolderClick: (folderId: string) => void;
};

const MainToolBar = ({
  folders,
  selectedFolderId,
  onFolderClick,
}: MainToolBarProps) => {
  return (
    <div className="flex space-x-4">
      {folders.map((folder) => (
        <button
          key={folder.id}
          className={`px-4 py-2 ${selectedFolderId === folder.id ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => onFolderClick(folder.id)}
        >
          {folder.name}
        </button>
      ))}
    </div>
  );
};

export default MainToolBar;
