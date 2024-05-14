import React from "react";


const Footer = (props: Props) => {
  const {} = props;
  return (
    <footer>
      <div className="text-white text-sm text-center py-4">
        &copy; 2024{" "}
        <a className="hover:text-bhagwa-600" href="https://tripathi.dev">
          Rishabh Tripathi
        </a>
        ,{" "}
        <a
          className="hover:text-bhagwa-600"
          href="https://github.com/aniketsingh0104"
        >
          Aniket Singh
        </a>
        {" "} & {" "}
        <a className="text-white text-sm text-center py-4">
         Enhanced by{" "}
         </a>
        <a className="hover:text-bhagwa-600"
          href="https://github.com/jaibhedia"
        >
         Shantanu Swami
        </a>
      </div>
    </footer>
  );
};
type Props = {};
export default React.memo(Footer);
