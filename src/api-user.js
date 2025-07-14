export const create = async (user) => {
  try {
    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const result = await response.json();
    console.log('Signup result:', result);
    return result;

  } catch (err) {
    console.error('Signup failed:', err);
    return { error: 'Network error' };
  }
};