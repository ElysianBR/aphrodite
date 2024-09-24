import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

import ElysianIcon from '/public/logo_wo_bg.png';
import '/src/app/signup/signup.css';

interface Item {
  icon: JSX.Element;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Desempenho adaptável',
    description:
      'Nosso produto se ajusta facilmente às suas necessidades, aumentando a eficiência e simplificando suas tarefas.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Construído para durar',
    description:
      'Experimente uma durabilidade incomparável que vai além, sendo um investimento duradouro.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Ótima experiência do usuário',
    description:
      'Integre nosso produto à sua rotina com uma interface intuitiva e fácil de usar.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Funcionalidade inovadora',
    description:
      'Mantenha-se à frente com recursos que estabelecem novos padrões, atendendo às suas necessidades em constante evolução melhor do que o restante.',
  },
];

const Content: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimated(true);  // Ativa a animação ao passar o mouse
  };

  const handleMouseLeave = () => {
    setIsAnimated(false);  // Reverte a animação ao sair o mouse
  };

  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Link href="/" passHref>
        <Box
          sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: 'center', cursor: 'pointer' }}
          className={`logo-login logo-animation ${isAnimated ? 'reverse' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={ElysianIcon} alt="Elysian Logo" width={150} height={50} />
        </Box>
      </Link>
      
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
};

export default Content;