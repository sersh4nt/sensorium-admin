import TreeViewExternal, { INode } from "react-accessible-treeview";

interface TreeViewProps {
  data: INode[];
}

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <TreeViewExternal
      data={data}
      nodeRenderer={({ element, getNodeProps }) => (
        <div {...getNodeProps()}>{element.name}</div>
      )}
    />
  );
};

export default TreeView;
