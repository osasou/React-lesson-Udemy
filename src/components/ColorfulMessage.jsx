import React from "react";

export const ColorfulMessage = (props) => {
  // 親コンポーネントが再レンダリングされたら，子も再レンダリングされるよー
  console.log("カラフル最初");
  // 分割代入してあげると毎回props.hogeと書かなくてよくなるよ
  const { color, message, children } = props;
  const contentStyle = {
    // color: props.color,
    // color: color, さらに省略できる
    color,
    fontSize: "18px"
  };

  return (
    <>
      {/* ２通りのpropsからのメッセージ受け渡し */}
      <p style={contentStyle}>{props.message}</p>
      <p style={contentStyle}>{props.children}</p>

      <p style={contentStyle}>{message}</p>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

// export default ColorfulMessage;
