

var selectElement = document.getElementById('region_select');
// 为select元素添加change事件监听器
selectElement.addEventListener('change', function() {
    // 当选项改变时，执行以下代码
    var selectedOption = this.options[this.selectedIndex]; // 获取选中的option元素
    var selectedValue = selectedOption.value; // 获取选中的值
    if(selectedValue==='全部地区'){
        region = "";
    }else{
        region = selectedValue;
    }
    renderChart5();

});

