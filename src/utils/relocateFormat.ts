const relocateFormat = (data: 'Relocate' | 'Remote' | 'RemoteRelocate' | string) => {
  switch (data) {
    case 'RemoteRelocate':
      return 'Start remote then relocate';
    default:
      return data;
  }
};

export default relocateFormat;
