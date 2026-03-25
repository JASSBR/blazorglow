const trackers = new Map();

export function initMouseTracker(element, componentId, options) {
  if (trackers.has(componentId)) dispose(componentId);

  const handler = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
  };

  const enterHandler = () => element.classList.add('blazorglow-hovered');
  const leaveHandler = () => {
    element.classList.remove('blazorglow-hovered');
    element.style.removeProperty('--mouse-x');
    element.style.removeProperty('--mouse-y');
  };

  element.addEventListener('mousemove', handler, { passive: true });
  element.addEventListener('mouseenter', enterHandler);
  element.addEventListener('mouseleave', leaveHandler);

  trackers.set(componentId, { element, handler, enterHandler, leaveHandler });
}

export function initCard3D(element, componentId, options) {
  if (trackers.has(componentId)) dispose(componentId);

  const maxRotate = options?.maxRotate || 10;
  const perspective = options?.perspective || 1000;
  element.style.perspective = `${perspective}px`;

  const inner = element.firstElementChild;
  if (!inner) return;

  const handler = (e) => {
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    inner.style.transform = `rotateY(${x * maxRotate}deg) rotateX(${-y * maxRotate}deg)`;
  };

  const leaveHandler = () => {
    inner.style.transition = 'transform 0.5s ease-out';
    inner.style.transform = 'rotateY(0deg) rotateX(0deg)';
    setTimeout(() => inner.style.transition = '', 500);
  };

  element.addEventListener('mousemove', handler, { passive: true });
  element.addEventListener('mouseleave', leaveHandler);

  trackers.set(componentId, { element, handler, leaveHandler });
}

export function initIntersectionObserver(element, dotNetRef, callbackMethod) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dotNetRef.invokeMethodAsync(callbackMethod);
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(element);
}

export function dispose(componentId) {
  const tracker = trackers.get(componentId);
  if (!tracker) return;

  const { element, handler, enterHandler, leaveHandler } = tracker;
  if (handler) element.removeEventListener('mousemove', handler);
  if (enterHandler) element.removeEventListener('mouseenter', enterHandler);
  if (leaveHandler) element.removeEventListener('mouseleave', leaveHandler);

  trackers.delete(componentId);
}
