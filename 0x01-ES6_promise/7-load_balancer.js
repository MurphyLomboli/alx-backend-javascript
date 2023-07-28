export const loadBalancer = (chinaDownload, USDownload) => {
  return Promise.race([chinaDownload, USDownload]);
};
