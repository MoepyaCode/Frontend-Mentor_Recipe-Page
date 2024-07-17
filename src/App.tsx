import { Container, Main, Wrapper } from './components'

export default function App() {

  function subHeading(title: string) {
    return (
      <h2 className='font-young-serif text-3xl font-semibold text-brandy-red'>
        {title}
      </h2>
    )
  }

  function prepTime() {
    const data: Record<string, string>[] = [
      { key: 'Total', value: 'Approximately 10 minutes' },
      { key: 'Preparation', value: '5 minutes' },
      { key: 'Cooking', value: '5 minutes' }
    ]

    return (
      <ul className='list-disc ml-7 tracking-wider text-wenge-brown flex flex-col gap-2 font-sans'>
        {data.map((item, index) => (
          <li key={index} className='pl-4'>
            <span>
              <b>{item.key}: </b> {item.value}
            </span>
          </li>
        ))}
      </ul>
    )
  }

  function Ingredients() {
    const data: string[] = [
      '2 large eggs',
      'Salt and pepper',
      '1 tablespoon of butter',
      'Optional fillings: cheese, vegetables, or meats'
    ]

    return (
      <ul className='list-disc ml-7 tracking-wider text-wenge-brown flex flex-col gap-2 font-sans'>
        {data.map((item, index) => (
          <li key={index} className='pl-4 marker:text-dark-raspberry'>
            {item}
          </li>
        ))}
      </ul>
    )
  }

  function instructions() {
    const data: Record<string, string>[] = [
      { key: 'Beat the eggs', value: 'In a medium bowl, beat the eggs with a fork until the yolks and whites are completely mixed.' },
      { key: 'Heat the pan', value: 'Place a non-stick skillet over medium heat and add the butter. Once the butter has melted, swirl it around the pan to coat the bottom.' },
      { key: 'Cook the omelette', value: 'Pour the eggs into the skillet and let them cook undisturbed for 1-2 minutes, until the edges start to set.' },
      { key: 'Add the fillings', value: 'Add your choice of cheese, vegetables, or meats to one half of the omelette.' },
      { key: 'Fold the omelette', value: 'Using a spatula, fold the other half of the omelette over the fillings. Let the omelette cook for another 1-2 minutes, until the cheese has melted.' },
      { key: 'Serve', value: 'Slide the omelette onto a plate and enjoy!' }
    ];

    return (
      <ol className='list-decimal ml-7 tracking-wider text-wenge-brown flex flex-col gap-2 font-sans'>
        {data.map((item, index) => (
          <li key={index} className='pl-4'>
            <span>
              <b>{item.key}: </b> {item.value}
            </span>
          </li>
        ))}
      </ol>
    )
  }

  function paragraphText(text: string) {
    return (
      <p className='font-sans text-wenge-brown'>
        {text}
      </p>
    )

  }

  return (
    <Main className='bg-eggshell grid place-items-center min-w-full'>
      <Container className=' bg-white flex flex-col justify-evenly gap-6 max-w-[736px] sm:w-[90%] sm:my-[7.5rem] sm:rounded-3xl'>
        
        <img className='sm:mx-8 sm:mt-8 sm:rounded-3xl' src="./images/challenges/recipe/omelette.jpeg" alt="omelette image" />


        <Wrapper className='flex flex-col justify-evenly gap-6 mx-8 mb-8'>
          <h1 className='font-young-serif text-5xl font-semibold text-dark-charcoal'>
            Simple Omlette Recipe
          </h1>

          {paragraphText('An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.')}

          {/* Preparation time */}
          <Wrapper className='bg-snow p-10 flex flex-col gap-4'>
            <h3 className='text-lg font-semibold text-dark-raspberry'>Preparation time</h3>

            {prepTime()}
          </Wrapper>

          {/* Ingredients */}
          <Wrapper className='flex flex-col gap-4'>
            {subHeading('Ingredients')}

            {Ingredients()}
          </Wrapper>

          {/* Instructions */}
          <Wrapper className='flex flex-col gap-4'>
            {subHeading('Instructions')}

            {instructions()}
          </Wrapper>

          <hr />

          {/* Nutrition */}
          <Wrapper className='flex flex-col gap-4'>
            {subHeading('Nutrition')}

            {paragraphText('The table below shows nutritional values per serving without the additional fillings.')}

            <table className='w-full flex flex-row flex-nowrap'>
              <thead className='min-w-[50%]'>
                <tr className='flex flex-col text-left'>
                  <th className='p-3 pl-8 border-b-[1px] border-solid border-white-coffee text-wenge-brown font-normal'>
                    Calories
                  </th>
                  <th className='p-3 pl-8 border-b-[1px] border-solid border-white-coffee text-wenge-brown font-normal'>
                    Carbs
                  </th>
                  <th className='p-3 pl-8 border-b-[1px] border-solid border-white-coffee text-wenge-brown font-normal'>
                    Protein
                  </th>
                  <th className='p-3 pl-8 text-wenge-brown font-normal'>
                    Fat
                  </th>
                </tr>
              </thead>

              <tbody className='flex-1'>
                <tr className='flex flex-col '>
                  <td className='p-3 pl-2 border-b-[1px] border-solid border-white-coffee text-dark-raspberry font-bold'>
                    277kcal
                  </td>
                  <td className='p-3 pl-2 border-b-[1px] border-solid border-white-coffee text-dark-raspberry font-bold'>
                    0g
                  </td>
                  <td className='p-3 pl-2 border-b-[1px] border-solid border-white-coffee text-dark-raspberry font-bold'>
                    20g
                  </td>
                  <td className='p-3 pl-2 text-dark-raspberry font-bold'>
                    22g
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>
        </Wrapper>

      </Container>
    </Main>
  )
}
