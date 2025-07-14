export const signin = async (user) => {
  try {
    const response = await fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const result = await response.json();
    console.log('Signin result:', result);
    return result;

  } catch (err) {
    console.error('Signin failed:', err);
    return { error: 'Network error' };
  }
};