function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let list = document.getElementById('grand-node').querySelectorAll('div');
  return list[list.length-1];
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    num = parseInt(list[i].innerHTML);
    num += n;
    list[i].innerHTML = num;
  }
}