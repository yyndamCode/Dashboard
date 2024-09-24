import { Menu } from "antd";
import { Link } from "react-router-dom";

const CustomMenu = ({ data, classTag }) => {
  return (
    <div className={classTag}>
      <Menu>
        {data.map((item, i) => (
          <Menu.Item key={i} onClick={item.onClick} className="p-2">
            <Link className={`p-2 ${item.tailwindClasses}`}>
              <span className="font-bold">{item.label}</span>
              {item.description && (
                <div className="text-sm">{item.description}</div>
              )}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default CustomMenu;
