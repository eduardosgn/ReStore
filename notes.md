# Sobre animações com o framer-motion usando Material UI
<p>Quando for implementar as animações, primeiro deixar o componente **< AnimatePresence exitBeforeEnter />** dentro do componente **< Container />**</p>
<br>
<p>Depois disso e criar as rotas, criar a **const location = useLocation()** pegando o useLocation do react-router-dom, exemplo abaixo:</p>
<br>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={ darkMode } handleThemeChange={ handleThemeChange } />
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch key={location.pathname} location={location}>
            <Route exact path='/' component={ Homepage } />
            <Route path='/catalog' component={ Catalog } />
            <Route path='/catalog/:id' component={ ProductDetails } />
            <Route path='/about' component={ AboutPage } />
            <Route path='/contact' component={ ContactPage } />
          </Switch>
        </AnimatePresence>
      </Container>
    </ThemeProvider>
<br>
<p>E após isso, criar os motion.div's nos componentes que tirevem alguma transição.</p>
<br>
        <>
            <motion.div
                initial='hidden'
                animate='visible'
                exit='hidden'
                transition={{duration: .5}}
                variants={variants}
            >
                <ProductList products={products} />
            </motion.div>
        </>

