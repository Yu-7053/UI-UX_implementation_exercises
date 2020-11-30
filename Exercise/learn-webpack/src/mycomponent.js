export default (text = "Hello Webpack this is my first try") => {
    const element = document.createElement("p");
  
  
    element.innerHTML = text;
  
    return element;
  };
  