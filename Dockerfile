# Use an official Python runtime with version 3.11.4
FROM python:3.11.4-slim  

# Set the working directory inside the container
WORKDIR /app

# Copy all files from the current directory to the container's /app directory
COPY . /app

# Install dependencies from requirements.txt if it exists
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port (optional for documentation purposes)
EXPOSE 8005

# Start the application using Gunicorn with Uvicorn workers
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8005"]
