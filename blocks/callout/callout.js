export default function decorate(block) {
  const [first, ...rest] = [...block.children];
  const title = first?.textContent.trim();
  first?.remove();

  const heading = document.createElement('p');
  heading.className = 'callout-title';
  heading.textContent = title;
  block.prepend(heading);

  rest.forEach((row) => row.classList.add('callout-body'));
}