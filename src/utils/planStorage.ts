export const storePlan = (plan: string) => {
    localStorage.setItem('selectedPlan', plan);
  };
  
  export const getStoredPlan = () => {
    return localStorage.getItem('selectedPlan');
  };
  
  export const clearStoredPlan = () => {
    localStorage.removeItem('selectedPlan');
};
