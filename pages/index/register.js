//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    clearInput:"",
    phoneValue:"",
    clearBtn:"",
  },
  clearInput: function (e) {
    let that = this;
    console.log("查看输入的值");
    console.log(e);
    console.log(e.currentTarget.dataset.name);
    console.log(e.detail.value);
    let inputName = e.currentTarget.dataset.name;
    let inputValue = e.detail.value;
    console.log(inputName === "phone");
    if (inputName === "phone") {
      that.setData({
        phoneValue:inputValue,
      });
    } else if (inputName === "password") {
      that.setData({
        passwordValue: inputValue,
      });
    };
  },
  clearBtn :function(e){
     let that = this;
     console.log("点击清除按钮");
     console.log(e);
     console.log(e.currentTarget.dataset.name);
     let inputName = e.currentTarget.dataset.name;
     console.log(inputName === "phone");
     if(inputName === "phone"){
       that.setData({
         phoneValue:"",
       })
     }
  },
  onLoad: function(){
  
  }
})
