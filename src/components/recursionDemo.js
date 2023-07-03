let deepWatch = (a) => {
  if (typeof a == 'Object') {
    for (let key in a) {
      let v = a[key];
      console.log(v);
      deepWatch(v);
    }

  } else {// 基本数据类型
    console.log(a);
    return;
  }
}

deepWatch(a);