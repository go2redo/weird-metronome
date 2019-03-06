describe( 'Test page', () => {
  beforeAll( async () => {
    await page.goto( 'http://localhost:3000/test.html' );
  } );

  it( 'should be titled "electus aut autem"', async () => {
    await page.waitFor( 1000 )

    const title = await page.$( 'h1' );
    const text = await page.evaluate( element => element.textContent, title );

    await expect( text ).toBe( 'delectus aut autem' );
  } );
} );