import React, { Fragment } from 'react';
import classNames from 'classnames';

import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainNav from '../components/MainNav';
import SEO from '../components/SEO';

import FacebookIcon from '../components/Icon/Facebook';
import GithubIcon from '../components/Icon/Github';
import TwitterIcon from '../components/Icon/Twitter';

import aboutImage from '../assets/images/about.svg';
import missionImage from '../assets/images/mission.svg';
import contactImage from '../assets/images/contact.svg';
import aboutmeImage from '../assets/images/about_me.svg';

export default function IndexPage() {
  return (
    <Fragment>
      <SEO
        title="Futury.me"
        description="Find your way"
      />
      <MainNav />
      <Header
        id="edu-title"
        title={`Education\nCounselor`}
        subtitle="Find your way"
      >
        <Button
          to="https://www.instagram.com/_hanna_sav_/"
          className="uppercase shadow-lg hover:bg-primary-lilac"
        >
          Download
        </Button>
      </Header>
      
      <Section
     title={'One step closer to your future profession'}
     id="about"
     image={aboutImage}
       
        alignRight
      />
      <Section
            title="About"
            id="about"
            description="A mobile app that will help future students choose a profession.The student enters information about interests and assessments. The application offers you a list of international or local universities, as well as a list of exams that you must pass to be admitted to the university, also reviews, and suggestions from graduates."
            image={aboutmeImage}
            alignLeft
      />
     
      <Section title="Contact" image={contactImage} alignRight>
        <p className="mb-4 text-lg text-secondary leading-normal font-body md:text-right">
        Feel free to ask anything, share your opinion
    
          or send us an email at{' '}
          <a
            className="text-primary-light no-underline hover:underline"
            href="mailto:infofutury.me@gmail.com"
          >
            infofutury.me@gmail.com
          </a>
          it's so important for us.
        </p>
        <p className="flex flex-row text-primary-light">
          <SocialButton
            to="https://linkedin.com"
            Icon={TwitterIcon}
            className="mr-6"
          />
          <SocialButton
            to="https://www.facebook.com/futury.me"
            Icon={FacebookIcon}
            className="mr-6"
          />
          <SocialButton
            to="https://instagram.com/futury.me"
            Icon={GithubIcon}
            className="mr-6 md:mr-0"
          />
        </p>
      </Section>
      <Footer />
    </Fragment>
  );
}

function Section({ alignRight, children, description, image, title }) {
  const mainCss = classNames('py-32', {
    'bg-primary-lighter bg-band bg-band-primary-lighter': !alignRight,
  });
  const containerCss = classNames('container md:flex', {
    'md:flex-row-reverse ': alignRight,
    'md:flex-row': !alignRight,
  });
  const contentCss = classNames('md:flex-1 md:flex md:flex-col', {
    'md:items-end md:pl-16': alignRight,
    'md:pr-16': !alignRight,
  });
  const titleCss = classNames(
    'text-6xl font-display font-normal uppercase leading-tight mb-6 border-b border-secondary-lightest',
    {
      'text-primary-light md:text-right': alignRight,
      'text-secondary-dark': !alignRight,
    }
  );
  const descriptionCss = classNames(
    'text-lg text-secondary-dark leading-normal font-body',
    {
      'md:text-right': alignRight,
    }
  );

  return (
    <section className={mainCss}>
      <div className={containerCss}>
        <div className={contentCss}>
          <h3 className={titleCss} style={{ width: '250px' }}>
            {title}
          </h3>
          {description && <p className={descriptionCss}>{description}</p>}
          {children}
        </div>
        <div className="mt-16 md:mt-0 md:w-2/5">
          <img src={image} alt="Illustration" />
        </div>
      </div>
    </section>
  );
}

function SocialButton({ className, Icon, to }) {
  const css = classNames(
    'mt-3 flex justify-center items-center w-16 h-16 border border-primary-light rounded-full hover:bg-primary-light hover:text-white',
    className
  );

  return (
    <a href={to} className={css}>
      <Icon className="fill-current" width={32} height={32} />
    </a>
  );
}
