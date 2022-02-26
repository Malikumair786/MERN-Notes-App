import axios from 'axios';

const API_URL = '/api/notes';

// Get user's notes
const getNotes = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  console.log(response.data);

  return response.data;
};

// Create a note
const createNote = async (noteData: unknown, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, noteData, config);
  console.log(response.data);

  return response.data;
};

// TODO Update note feat

// Delete a note
const deleteNote = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${id}`, config);

  return response.data;
};

const noteService = {
  getNotes,
  createNote,
  deleteNote,
};

export default noteService;
