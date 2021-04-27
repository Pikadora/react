import * as Mockup from '../mockup';

export const getUsers = async() => {
    return await new Promise((resolve) => setTimeout(() => resolve({
         users: Mockup.rightsResponseMockup,
         }), 1000));
  }


