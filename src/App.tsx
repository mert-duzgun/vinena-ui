import { Button } from 'components';

function App() {
  return (
    <div className="p-4">
      <h1>Vinena UI</h1>
      <div className="space-x-4">
        <Button size="small" icon="home">
          Button
        </Button>
        <Button icon="home">Button</Button>
        <Button size="large" icon="home">
          Button
        </Button>
      </div>
      <div className="mt-4 space-x-4">
        <Button variant="secondary" size="small">
          Button
        </Button>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" size="large">
          Button
        </Button>
      </div>
      <div className="mt-4 space-x-4">
        <Button disabled size="small">
          Button
        </Button>
        <Button disabled>Button</Button>
        <Button disabled size="large">
          Button
        </Button>
      </div>
      <div className="mt-4 space-x-4">
        <Button disabled variant="secondary" size="small">
          Button
        </Button>
        <Button disabled variant="secondary">
          Button
        </Button>
        <Button disabled variant="secondary" size="large">
          Button
        </Button>
      </div>
      <div className="mt-4 space-x-4">
        <Button icon="home" as="a" href="https://duzgun.dev" target="_blank" size="small">
          Button
        </Button>
        <Button as="a" href="https://duzgun.dev" target="_blank">
          Button
        </Button>
        <Button as="a" href="https://duzgun.dev" target="_blank" size="large">
          Button
        </Button>
      </div>
      <div className="mt-4 space-x-4">
        <Button
          icon="home"
          as="a"
          href="https://duzgun.dev"
          target="_blank"
          variant="secondary"
          size="small"
        >
          Button
        </Button>
        <Button as="a" href="https://duzgun.dev" target="_blank" variant="secondary">
          Button
        </Button>
        <Button as="a" href="https://duzgun.dev" target="_blank" variant="secondary" size="large">
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
