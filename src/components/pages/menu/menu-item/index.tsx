import { NMenu } from "@namespace/menu";

export const MenuItem = ({ items }: NMenu.TMenuItemsProps) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img
              src={"https://via.placeholder.com/300x300"}
              alt={title}
              className="photo"
            />
            <div className="item-info">
              <div>
                <h4>{title}</h4>
                <h4 className="price">{price} PLN</h4>
              </div>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
