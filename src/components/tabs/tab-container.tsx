import { TabItem } from "./tab-item";

export function TabContainer() {
  return (
    <div className="flex flex-col">
      <div className="flex border-b bg-sidebar">
        <TabItem active>File 1</TabItem>
        <TabItem>File 2</TabItem>
        <TabItem>File 3</TabItem>
        <TabItem>File 4</TabItem>
      </div>
      <div className="flex-1 p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolores tempore, accusamus distinctio accusantium, consequuntur vero
          tempora error eligendi ea, enim aperiam cumque ad? Velit explicabo
          fugiat sapiente natus ratione!
        </p>
      </div>
    </div>
  );
}
