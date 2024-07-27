import type { NextApiRequest, NextApiResponse } from 'next';
import { signup, login } from '../../utils/auth';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { email, password, type } = req.body;
      try {
        let user;
        if (type === 'signup') {
          user = await signup(email, password);
        } else {
          user = await login(email, password);
        }
        res.status(200).json({ user });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
