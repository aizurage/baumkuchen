import { json, LoaderFunction } from '@remix-run/node';
import { prisma } from "~/db.server";
import { createUserSession, getUserId } from "~/session.server";
import React, { useState, useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

export let loader: LoaderFunction = async ({request}) => {
  const userId = await getUserId(request);
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user ? json(user) : json({}, { status: 404 });
}

export default function Dashboard(props) {
  const [experiencePoint, setExperiencePoint] = useState(props.experiencePoint);
  const navigate = useNavigate();
  const [isDelayCompleted, setIsDelayCompleted] = useState(false);  // 名前を変更

  const incrementExperience = async () => {
    const response = await fetch('./incrementExperience', { method: 'POST' });
    const data = await response.json();
    setExperiencePoint(data.experiencePoint);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayCompleted(true); 
    }, 100);

    return () => clearTimeout(timer);  // クリーンアップ関数を追加
  }, []);

  useEffect(() => {
    incrementExperience();
  }, []); 

  useEffect(() => {
    if (isDelayCompleted) {  // delayが完了している場合のみnavigateを行います。
      navigate(`/newCorrect?answer=${experiencePoint}`);
    }
  }, [isDelayCompleted]);

  return (
    <div>
      <p className='text-5xl '>経験値: {experiencePoint-1}から{experiencePoint}にup</p>
    </div>
  );
}
