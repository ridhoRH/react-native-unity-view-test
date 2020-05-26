using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SMS : MonoBehaviour
{
    public GameObject model;

    void Awake()
    {
        UnityMessageManager.Instance.OnMessage += toggleRotate;
    }

    void onDestroy()
    {
        UnityMessageManager.Instance.OnMessage -= toggleRotate;
    }

    void toggleRotate(string message)
    {
        Debug.Log("onMessage:" + message);
        model.SetActive(!model.activeSelf);
    }
}
