window.onload = function() {
    let box = document.getElementsByClassName('box')[0]
    box.addEventlistener('click',() => {
        alert('这是测试代码')
    })
}