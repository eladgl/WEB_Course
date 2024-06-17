const convertToCalc = (schema, ref) => {
  schema.rows.forEach((row, index) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    if (index === 0) {
      rowDiv.classList.add("result");
    }
    row.forEach((component) => {
      const tagElement = document.createElement(component.tag);

      for (let classItem of component.class) {
        tagElement.classList.add(classItem);
      }

      if (component.value) {
        tagElement.value = component.value ?? "";
      }

      tagElement.innerHTML = component.innerHTML ?? "";
      if (component.id) tagElement.id = component.id;
      rowDiv.append(tagElement);
    });

    ref.append(rowDiv);
  });
};
