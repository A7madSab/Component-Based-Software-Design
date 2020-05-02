# your code goes here
from flask import Flask, request, jsonify
import pytesseract
from PIL import Image
from io import BytesIO
import base64


app = Flask(__name__)


@app.route('/test', methods=['POST'])
def index():
    request_json = request.get_json(force=True)
    image_string = request_json.get('Base64Image')

    if not image_string:
        return jsonify(
            error={
                'Base64Image': 'This field is required.'
            }
        ), 400

    image = Image.open(BytesIO(base64.urlsafe_b64decode(image_string)))

    image_text = pytesseract.image_to_string(
        image,
        lang='eng'
    )

    return jsonify({
        'text': image_text
    })


if __name__ == "__main__":
    app.run(debug=False, port=5000)
