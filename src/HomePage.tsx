import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardAction from "@mui/material/CardActions"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function App() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 style={{color: "whitesmoke"}}>Vite + React</h1>
        <Card 
            sx={{
              color: "whitesmoke",
              backgroundColor: "#4a148c",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",  
            }}>
            <CardContent>
                <CardAction>
                <Button 
                    onClick={() => setCount((count) => count + 1)}
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        border: "solid 2px",
                        color: "whitesmoke",
                    }}>
                    count is {count}
                </Button>
                </CardAction>
                <Typography>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </Typography>
          </CardContent>
        </Card>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }