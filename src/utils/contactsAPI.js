import { endPointAPI } from 'constants/constantsAPI';

// --------------------------------
export const getContacts = async () => {
  const response = await fetch(endPointAPI);
  const responsedData = await response.json();
  return responsedData;
};

// --------------------------------
export const postContact = async ({ name, phone }) => {
  const response = await fetch(endPointAPI, {
    method: 'POST',
    body: JSON.stringify({
      name,
      phone,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const responsedData = await response.json();
  return responsedData;
};

// --------------------------------
export const removeContact = async id => {
  const response = await fetch(`${endPointAPI}/${id}`, {
    method: 'DELETE',
  });
  const responsedData = await response.json();
  return responsedData;
};
