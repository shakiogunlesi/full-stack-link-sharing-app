import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../lib/firebase';
import React from 'react';

const AddedLinks: NextPage = () => {
  const [links, setLinks] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'links'));
        const linksData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLinks(linksData);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Added Links</h1>
      <ul className="list-disc">
        {links.map(link => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const addedLinksComponent = AddedLinks;

export default addedLinksComponent;
