import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      const querySnapshot = await getDocs(collection(db, 'links'));
      const links = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json({ links });
      break;
    case 'POST':
      const { url, description } = req.body;
      if (!validateURL(url)) {
        return res.status(400).json({ error: 'Invalid URL' });
      }
      const newLink = await addDoc(collection(db, 'links'), { url, description });
      res.status(201).json({ id: newLink.id, ...newLink.data() });
      break;
    case 'PUT':
      const { id, newDescription } = req.body;
      const linkRef = doc(db, 'links', id);
      await updateDoc(linkRef, { description: newDescription });
      res.status(200).json({ id, newDescription });
      break;
    case 'DELETE':
      const { linkId } = req.body;
      await deleteDoc(doc(db, 'links', linkId));
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

