'use strict';

const $spider = document.querySelector('img.spider');
const $wall = document.querySelector('div.wall');

$wall.addEventListener('click', (e) => {
  // write code here
  e.preventDefault();

  const wallRect = $wall.getBoundingClientRect();
  const spiderRect = $spider.getBoundingClientRect();
  const borderTop = parseInt(getComputedStyle($wall).borderTopWidth);
  const borderLeft = parseInt(getComputedStyle($wall).borderLeftWidth);

  const borderOffset = borderTop * 2;
  const maxPosX = wallRect.right - borderOffset - spiderRect.width;
  const maxPosY = wallRect.bottom - borderOffset - spiderRect.height;
  const minPosX = wallRect.left;
  const minPosY = wallRect.top;

  const clickX = e.clientX - spiderRect.width / 2 - borderTop;
  const clickY = e.clientY - spiderRect.height / 2 - borderLeft;

  const newPosX = Math.max(Math.min(clickX, maxPosX), minPosX) - wallRect.x;
  const newPosY = Math.max(Math.min(clickY, maxPosY), minPosY) - wallRect.y;

  $spider.style.top = `${newPosY}px`;
  $spider.style.left = `${newPosX}px`;
});
