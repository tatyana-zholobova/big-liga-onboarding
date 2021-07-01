const addModifier = (arrayElements, modifier) => {
  arrayElements.forEach((element) => {
    if (element) {
      const classWithModifier = element.className + '--' + modifier;
      if (!element.classList.contains(classWithModifier)) {
        element.classList.add(classWithModifier);
      }
    }
  });
};

export { addModifier };