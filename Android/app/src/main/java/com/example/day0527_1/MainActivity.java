package com.example.day0527_1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    EditText edtxt01, edtxt02;
    Button btnplus, btnmin, btnmul, btndiv;
    TextView txtv01;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edtxt01 = (EditText) findViewById(R.id.edtxt01);
        edtxt02 = (EditText) findViewById(R.id.edtxt02);
        btnplus = (Button) findViewById(R.id.btnplus);
        btnmin = (Button) findViewById(R.id.btnmin);
        btnmul = (Button) findViewById(R.id.btnmul);
        btndiv = (Button) findViewById(R.id.btndiv);
        txtv01 = (TextView) findViewById(R.id.txtv01);

        btnplus.setOnClickListener(mClick);
        btnmin.setOnClickListener(mClick);
        btnmul.setOnClickListener(mClick);
        btndiv.setOnClickListener(mClick);
    }

    View.OnClickListener mClick = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            if(v.getId() == R.id.btnplus){

            }
        }
    }