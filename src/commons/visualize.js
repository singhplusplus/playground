export const visualize = (vizFunc, vizAttr) => {
  // console.log("fetchedData", fetchedData);
  // console.log("vizFunc", vizFunc);
  // console.log("this", this);
  return vizFunc.bind(this, vizAttr);
  // console.log("vizAttr", vizAttr);
  // vizFunc.call(fetchedData, vizAttr);
};