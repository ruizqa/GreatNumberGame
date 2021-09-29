from flask import Flask, render_template, request, redirect, session
import random

app = Flask( __name__ )
app.secret_key = "secret"

@app.route( "/", methods=['GET'] )
def welcome():
    if not 'number' in session:
        session['number'] = random.randint(1,100)
        session['attempts'] = 1
    else:
        session['attempts'] +=1
    return render_template( "index.html")

@app.route( "/compare", methods=['GET'] )
def closeSession():
    if 'number' in session:
        result = { "number": session['number'], "attempts": session['attempts']}
        return result
    else:
        return redirect('/')

@app.route( "/reset", methods=['GET'] )
def reset():
    if 'number' in session:
        session.clear()
        
    return redirect('/')

if __name__ == "__main__":
    app.run( debug = True )