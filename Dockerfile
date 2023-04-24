FROM node:19.8.1

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios al directorio de trabajo
COPY package*.json ./
COPY . .

# Instalar las dependencias
RUN npm install

# Exponer el puerto que usará tu aplicación
EXPOSE 8000

# Iniciar la aplicación
CMD [ "npm", "start" ]
