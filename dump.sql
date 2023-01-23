--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: poc; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.poc (
    id integer NOT NULL,
    programador character varying(50),
    "primeiraSkill" character varying(100) NOT NULL,
    "segundaSkill" character varying(100) NOT NULL
);


--
-- Name: poc_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.poc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: poc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.poc_id_seq OWNED BY public.poc.id;


--
-- Name: poc id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poc ALTER COLUMN id SET DEFAULT nextval('public.poc_id_seq'::regclass);


--
-- Data for Name: poc; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: poc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.poc_id_seq', 1, false);


--
-- Name: poc poc_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poc
    ADD CONSTRAINT poc_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

