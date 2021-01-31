import React from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import {useRouter} from 'next/router'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button'

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - Página Inicial</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input 
              placeholder="Digite seu nome"
              name="nomeUsuario" 
              onChange={(e)=>{
                setName(e.target.value);
              }}/>
              <Button type="submit" disabled={!name}>
                {`Jogar - ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            { db.external.map((link) => {
              const [projectName, gitHubUser] = link
              .replace(/\//g,'')
              .replace('https:','')
              .replace('.vercel.app', '')
              .split('.')
              return <li key={link}>
                <Widget.Topic href={link}>{`${projectName} / ${gitHubUser}`}</Widget.Topic>
                </li>;
            })}
            
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ikaroamorim/quizapp" />
    </QuizBackground>
  );
}
