const {SecretManagerServiceClient} = require("@google-cloud/secret-manager");
class SecretReader {
    async getSecret(secret) {
        try {
            const name = `projects/moramia-pushdev/secrets/${secret}/versions/latest`;
            const client = new SecretManagerServiceClient();
            const [version] = await client.accessSecretVersion({
                name: name,
            });
            // Extract the payload as a string.
            const payload = version.payload.data.toString();

            return payload;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = SecretReader;