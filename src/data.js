export function srijanEmployees() {
  return [
    { name: 'Puneet Sharma', title : 'Technical Lead L1' },
    { name: 'Abhinav Rana', title : 'Senior Drupal Developer L2' },
    { name: 'Apoorv Mathur', title : 'Frontend Technical Lead L1' },
    { name: 'Anul Khadija', title : 'Drupal Developer L2' },
    { name: 'Pradeep Jha', title : 'Senior Drupal Developer L1' },
  ];
}

export function matchEmployees(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}
